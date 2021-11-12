package api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class User {

    CloudFirestoreUserDatabase cloudFirestoreDatabase = new CloudFirestoreUserDatabase();

    @POST
    public Response createUser(String json){

        cloudFirestoreDatabase.save(json);

        return Response.ok(json).build();

    }
    
    @PUT
    public Response updateUser (String json)
    {
        cloudFirestoreDatabase.update(json);
        return Response.ok(json).build();
    }
    
}
