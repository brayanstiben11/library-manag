package api;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.Query;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import com.google.gson.Gson;
import entity.Libro;
import entity.Prestamo;
import entity.Usuario;
import java.util.concurrent.ExecutionException;

public class CloudFirestorePrestamoDatabase {

    private Firestore db = FirestoreClient.getFirestore();
    Gson gson = new Gson();
    public String i="pres";
    
    public boolean save(Libro libro, Usuario user) {

        Prestamo prestamo = new Prestamo();
        prestamo.setCisbn(libro.getCisbn());
        prestamo.setTituloLibro(libro.getTitulo());
        prestamo.setCodigoPrestamo(i+1);
        prestamo.setEncargado(user.getNombre());
        prestamo.setEmailEncargado(user.getEmail());
        CloudFirestorePrestamoDatabase prestamoverificacion = new CloudFirestorePrestamoDatabase();
        if (prestamoverificacion.modifyBook(libro) == true) {
            DocumentReference docRef = db.collection("Prestamo").document(prestamo.getCodigoPrestamo());
            docRef.set(prestamo);
            return true;
        } else {
            return false;
        }
    }

    public boolean getInfo(String codigo) throws InterruptedException, ExecutionException {

        Libro libro = gson.fromJson(codigo, Libro.class);
        Usuario user = gson.fromJson(codigo, Usuario.class);

        CollectionReference libros = db.collection("Libros");
        Query query = libros.whereEqualTo("cisbn", libro.getCisbn());
        ApiFuture<QuerySnapshot> querySnapshot = query.get();

        Libro libro1 = null;

        for (DocumentSnapshot document : querySnapshot.get().getDocuments()) {
            libro1 = document.toObject(Libro.class);
        }

        CollectionReference usuarios = db.collection("usersFinal");
        Query query1 = usuarios.whereEqualTo("email", user.getEmail());
        ApiFuture<QuerySnapshot> querySnapshot1 = query1.get();

        Usuario user1 = null;

        for (DocumentSnapshot document : querySnapshot1.get().getDocuments()) {
            user1 = document.toObject(Usuario.class);
        }

        CloudFirestorePrestamoDatabase prestamo = new CloudFirestorePrestamoDatabase();
        if (prestamo.save(libro1, user1) == true) {
            return true;
        } else {
            return false;
        }
    }

    public boolean modifyBook(Libro libro) {
        if (libro.getCantidad() > 0) {
            libro.setCantidad(libro.getCantidad() - 1);
            DocumentReference docRef1 = db.collection("Libros").document(libro.getCisbn());
            docRef1.set(libro);
            return true;
        } else {
            return false;
        }
    }
}
