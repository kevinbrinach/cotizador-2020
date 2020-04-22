import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helpers';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    //extraer de datos
    const { marca, year, plan } = datos;

    // para que no se ejecute el return de abajo si es que no hay ningun dato definido
    if (marca === '' || year === '' || plan === '') {
        return null
    }

    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
                <li>Año del auto: {year}</li>
            </ul> 
        </ContenedorResumen>
    );
}
 
export default Resumen;