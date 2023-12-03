package com.luisn.passatempo.exception;

public class FailedException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public FailedException(String mensagem) {
        super(mensagem);
    }

}
