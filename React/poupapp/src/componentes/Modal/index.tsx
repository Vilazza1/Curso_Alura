import React, { forwardRef, useImperativeHandle, useRef } from "react";
import {
  ButtonGroup,
  CloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
} from "./style";
import Botao from "../Botao";

interface ModalProps {
  icon: React.ReactNode;
  titulo: string;
  children: React.ReactNode;
  aoClicar: () => void;
  clickForaMOdal: boolean;
}

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ icon, titulo, children, aoClicar, clickForaMOdal }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    const fechaMOdal = () => {
      dialogRef.current?.close();
    };

    useImperativeHandle(ref, () => ({
      open: () => dialogRef.current?.showModal(),
      close: fechaMOdal,
    }));

    const aoclickForaMOdal = (evento: React.MouseEvent<HTMLDialogElement>) => {
      if (clickForaMOdal && evento.target === dialogRef.current) {
        fechaMOdal();
      }
    };

    return (
      <ModalOverlay>
        <ModalContainer ref={dialogRef} onClick={aoclickForaMOdal}>
          <ModalHeader>
            <div>
              {icon}
              {titulo}
            </div>
            <CloseButton onClick={fechaMOdal}>x</CloseButton>
          </ModalHeader>
          {children}
          <ButtonGroup>
            <Botao $variante="secundario" onClick={fechaMOdal}>Cancelar</Botao>
            <Botao $variante="primario" onClick={() => {
              aoClicar()
              fechaMOdal()
            }}>
              Adicionar
            </Botao>
          </ButtonGroup>
        </ModalContainer>
      </ModalOverlay>
    );
  },
);

export default Modal;
