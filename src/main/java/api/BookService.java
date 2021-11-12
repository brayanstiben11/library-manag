
package api;

import java.util.concurrent.ExecutionException;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/book")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class BookService {
    
      CloudFirestoreBookDatabase cloudFirestoreDatabase = new CloudFirestoreBookDatabase();

    @POST
    public Response createBook (String json){

        cloudFirestoreDatabase.save(json);

        return Response.ok(json).build();
    }
    
    @GET
    public Response getbook () throws InterruptedException, ExecutionException
    {
       return Response.ok(cloudFirestoreDatabase.getAll()).build();
    }
    
    @PUT
    public Response deleteBook (String json)
    {
        if (cloudFirestoreDatabase.deleteBook(json)==true)
        {
            return Response.ok("LIBRO ELIMINADO").build();
        }
        else
        {
            return Response.ok("NO SE PUDO COMPLETAR LA OPERACION").build();
        }
    }
}
