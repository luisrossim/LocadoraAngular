package com.luisn.passatempo.controller;

import com.luisn.passatempo.exception.FailedException;
import com.luisn.passatempo.exception.RecordNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ApplicationControllerAdvice {

    @ExceptionHandler(RecordNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleNotFoundException(RecordNotFoundException ex) {
        return ex.getMessage();
    }

    @ExceptionHandler(FailedException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public String handleFailedException(FailedException ex) {
        return ex.getMessage();
    }
}
