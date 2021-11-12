
package api;

import java.util.concurrent.ExecutionException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/devolucion")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class devolucionService {
    
    CloudFirestoreDevolucionDatabase cloudFirestoreDatabase = new CloudFirestoreDevolucionDatabase();
    
     @POST
    public Response backBook (String json) throws InterruptedException, ExecutionException
    {
        
        if(cloudFirestoreDatabase.devolverlibro(json)==true)
        {
        return Response.ok("DEVOLUCION CORRECTA").build();
        }
        else
        {
         return Response.ok("ERROR AL PROCESAR").build();  
        }
    }
    
    @GET
    public Response getPrestamo () throws InterruptedException, ExecutionException
    {
       return Response.ok(cloudFirestoreDatabase.getAll()).build();
    }
}
