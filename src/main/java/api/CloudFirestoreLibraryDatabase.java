
package api;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.google.gson.Gson;
import entity.Biblioteca;

public class CloudFirestoreLibraryDatabase implements Database {
    private Firestore db = FirestoreClient.getFirestore();

    Gson gson = new Gson();

    @Override
    public void save(String json) {
        Biblioteca biblioteca = gson.fromJson(json, Biblioteca.class);  
        DocumentReference docRef = db.collection("Biblioteca").document(biblioteca.getPaginaweb());
        docRef.set(biblioteca);
    }

    @Override
    public void update(String json) {
        Biblioteca biblioteca = gson.fromJson(json, Biblioteca.class);  
        ApiFuture<WriteResult> collectionsApiFuture = db.collection ("Biblioteca")
        .document(biblioteca.getPaginaweb()).set(biblioteca);
    }
    
}
