
package api;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.google.gson.Gson;
import entity.Libro;
import entity.Prestamo;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

public class CloudFirestoreDevolucionDatabase {
    
    private Firestore db = FirestoreClient.getFirestore();
    Gson gson = new Gson();
    
    public boolean devolverlibro(String info) throws InterruptedException, ExecutionException {
        
        Prestamo prestamo = gson.fromJson(info, Prestamo.class);
        CloudFirestorePrestamoDatabase prestamo2 = new CloudFirestorePrestamoDatabase();
        DocumentReference docRef = db.collection("Prestamo").document(prestamo.getCodigoPrestamo());
        ApiFuture<DocumentSnapshot> future = docRef.get();
        DocumentSnapshot document = future.get();
        CloudFirestoreDevolucionDatabase devolucion = new  CloudFirestoreDevolucionDatabase();

        if(document.exists())
        {
        if (devolucion.incresedBook(info) == true) {
            ApiFuture<WriteResult> writeResult = (ApiFuture<WriteResult>) db.collection("Prestamo").document(prestamo.getCodigoPrestamo()).delete();
            return true;
        }
        return true;
        }
        else {
            return false;
        }
    }

    public boolean incresedBook(String libro) throws InterruptedException, ExecutionException {
        Libro librode = gson.fromJson(libro, Libro.class);
        CollectionReference libros = db.collection("Libros");
        Query query = libros.whereEqualTo("cisbn", librode.getCisbn());
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        Libro libro1 = null;

        for (DocumentSnapshot document : querySnapshot.get().getDocuments()) {
            libro1 = document.toObject(Libro.class);
        }
        
        libro1.setCantidad(libro1.getCantidad()+ 1);
        DocumentReference docRef1 = db.collection("Libros").document(libro1.getCisbn());
        docRef1.set(libro1);
        return true;
    }
    
    public String getAll () throws InterruptedException, ExecutionException
    {
        ApiFuture <QuerySnapshot> future=db.collection("Prestamo").get();
        List<QueryDocumentSnapshot> documents =future.get().getDocuments();
        ArrayList<Prestamo> prestamos = new ArrayList <> ();
        
        for(QueryDocumentSnapshot document : documents)
        {
            prestamos.add(document.toObject(Prestamo.class));
        }
        
        return gson.toJson(prestamos);
    }
    
}
