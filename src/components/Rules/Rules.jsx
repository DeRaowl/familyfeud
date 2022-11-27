import styled from 'styled-components'
import { useState } from 'react';

const Rules = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Hamburger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </Hamburger>
            <RulesMenu open={open}>
                <p>Rules</p>
                <small>1. Guess the most popular answers to survey questions.</small>
                <small>2. Each card has a points associated with it</small>
                <small>3. We can assign this points to selected player</small>
                <small>4. You can go to next question by clicking on Next Button</small>
                <button onClick={() => setOpen(!open)}>Close</button>
            </RulesMenu>
        </div>
    );
}   

const Hamburger = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: ${({ open }) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:first-child {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
            opacity: ${({ open }) => open ? '0' : '1'};
            transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const RulesMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #fff;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-200%)'};
    height: 50vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    margin: 0 auto;
    p {
        font-size: 30px;
        margin: 25px auto;
        text-align: center;
    }

    button {
        background: #333;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        margin-top: 20px;

        &:hover {
            background: #acbae6;
            color: #fff;
        }

        &:focus {
            outline: none;
        }
    }
`;

export default Rules;