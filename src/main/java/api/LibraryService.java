
package api;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/library")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LibraryService {
    
      CloudFirestoreLibraryDatabase cloudFirestoreDatabase = new CloudFirestoreLibraryDatabase();

    @POST
    public Response createLibrary (String json){

        cloudFirestoreDatabase.save(json);

        return Response.ok(json).build();
    }
    @PUT
    public Response updateLibrary (String json) 
    {
        cloudFirestoreDatabase.update(json);
        return Response.ok(json).build();
    }
           
}
