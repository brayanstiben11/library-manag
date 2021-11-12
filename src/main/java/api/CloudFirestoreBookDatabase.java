
package api;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.google.gson.Gson;
import entity.Libro;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
public class CloudFirestoreBookDatabase implements Database{
    
    private Firestore db = FirestoreClient.getFirestore();

    Gson gson = new Gson();

    @Override
    public void save(String json)
    {
        Libro libro = gson.fromJson(json, Libro.class);  
        DocumentReference docRef = db.collection("Libros").document(libro.getCisbn());
        docRef.set(libro);
    }

    @Override
    public void update(String email) {
        
    }
    
    
    public String getAll () throws InterruptedException, ExecutionException
    {
        ApiFuture <QuerySnapshot> future=db.collection("Libros").get();
        List<QueryDocumentSnapshot> documents =future.get().getDocuments();
        ArrayList<Libro> libros = new ArrayList <> ();
        
        for(QueryDocumentSnapshot document : documents)
        {
            libros.add(document.toObject(Libro.class));
        }
        
        return gson.toJson(libros);
    }
    
    public boolean deleteBook (String json)
    {
     Libro libro = gson.fromJson(json, Libro.class);
     
     ApiFuture<WriteResult> writeResult = (ApiFuture<WriteResult>) db.collection("Libros").document(libro.getCisbn()).delete();
     return true;
    }
}
