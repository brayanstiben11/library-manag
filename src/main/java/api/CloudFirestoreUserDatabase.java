package api;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.google.gson.Gson;
import entity.Usuario;
public class CloudFirestoreUserDatabase implements Database{

    private Firestore db = FirestoreClient.getFirestore();

    Gson gson = new Gson();

    @Override
    public void save(String json)
    {
        Usuario usuario = gson.fromJson(json, Usuario.class);  
        DocumentReference docRef = db.collection("usersFinal").document(usuario.getEmail());
        docRef.set(usuario);
    }

    @Override
    public void update(String json) {
        Usuario usuario = gson.fromJson(json, Usuario.class);  
        ApiFuture<WriteResult> collectionsApiFuture = db.collection ("usersFinal")
        .document(usuario.getEmail()).set(usuario);
    }

}
