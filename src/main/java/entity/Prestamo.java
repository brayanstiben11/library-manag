package entity;

public class Prestamo {

    private String codigoPrestamo;
    private String cisbn;
    private String encargado;
    private String tituloLibro;
    private String emailEncargado;

    public String getCodigoPrestamo() {
        return codigoPrestamo;
    }

    public void setCodigoPrestamo(String codigoPrestamo) {
        this.codigoPrestamo = codigoPrestamo;
    }
    
    

    public String getEmailEncargado() {
        return emailEncargado;
    }

    public void setEmailEncargado(String emailEncargado) {
        this.emailEncargado = emailEncargado;
    }

    public String getTituloLibro() {
        return tituloLibro;
    }

    public void setTituloLibro(String tituloLibro) {
        this.tituloLibro = tituloLibro;
    }

    public Prestamo() {
    }

    public String getCisbn() {
        return cisbn;
    }

    public void setCisbn(String cisbn) {
        this.cisbn = cisbn;
    }

    public String getEncargado() {
        return encargado;
    }

    public void setEncargado(String encargado) {
        this.encargado = encargado;
    }

}
