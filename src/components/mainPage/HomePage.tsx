import { useState } from 'react';
import styled from 'styled-components';
import { pageColors } from '../utils/constants';
import { twoSum } from '../arrays/algorithms';

const MainSection = styled.section`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90vw;

    h1 {
        color: ${pageColors.darkText};
    }

    `

const CanvasWrapper = styled.div`
    background-color: white;
    border: 5px solid blue;
`
export default function HomePage() {

    return (
        <>
            <MainSection>
                <h1>Select the algorithm that you want to see</h1>
                <ul>
                    <li>
                        <pre>
                            <code>Algoritmo 1   </code>
                        </pre>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <p>El dibujito:</p>
                <CanvasWrapper>
                    <canvas />
                </CanvasWrapper>
            </MainSection>
        </>
    );
}
