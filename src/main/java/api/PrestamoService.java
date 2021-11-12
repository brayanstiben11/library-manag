
package api;

import java.util.concurrent.ExecutionException;
import javax.ws.rs.Consumes;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/prestamo")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PrestamoService {
    
      CloudFirestorePrestamoDatabase cloudFirestoreDatabase = new CloudFirestorePrestamoDatabase();

   @PUT
    public Response newPrestamo (String json) throws InterruptedException, ExecutionException
    {

        if (cloudFirestoreDatabase.getInfo(json)==true)
        {

        return Response.ok("PRESTAMO CONCEDIDO").build();
        }
        
        else
        {
            return Response.ok("PRESTAMO NO CONCENDIDO").build();
        }
    }     
}
