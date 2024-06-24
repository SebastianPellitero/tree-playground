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
    /* details {
        border: 1px solid #aaa;
        border-radius: 4px;
        padding: 0.5em 0.5em 0;
    }

    summary {
        font-weight: bold;
        margin: -0.5em -0.5em 0;
        padding: 0.5em;
    }

    details[open] {
        padding: 0.5em;
    }

    details[open] summary {
        border-bottom: 1px solid #aaa;
        margin-bottom: 0.5em;
    } */

    details {
        width: 80%;
        margin: 0 auto ;
        background: #282828;
        margin-bottom: .5rem;
        box-shadow: 0 .1rem 1rem -.5rem rgba(0,0,0,.4);
        border-radius: 5px;
        overflow: hidden;
    }

    summary {
        padding: 1rem;
        display: block;
        background: #333;
        padding-left: 2.2rem;
        position: relative;
        cursor: pointer;
        user-select: none;
    }

    summary:before {
        content: '';
        border-width: .4rem;
        border-style: solid;
        border-color: transparent transparent transparent #fff;
        position: absolute;
        top: 1.3rem;
        left: 1rem;
        transform: rotate(0);
        transform-origin: .2rem 50%;
        transition: .25s transform ease;
    }

    details[open] > summary:before {
        transform: rotate(90deg);
    }


    details summary::-webkit-details-marker {
        display:none;
    }

    details > ul {
        padding-bottom: 1rem;
        margin-bottom: 0;
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
                <details>
                    <summary>Algorithm 1</summary>
                    <code> export const depthFirstValuesRecursive = (root: INode | null): Array</code>
                </details>


                <p>El dibujito:</p>
                <CanvasWrapper>
                    <canvas />
                </CanvasWrapper>
            </MainSection>
        </>
    );
}
