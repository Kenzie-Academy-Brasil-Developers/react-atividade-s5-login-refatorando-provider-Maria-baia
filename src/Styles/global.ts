import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #0b132b;
        color: #5bc0be;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        justify-content: center;
    }

    form {
        background-color: #1c2541;
        display: flex;
        flex-direction: column;
        width: 320px;
        height: 320px;
        justify-content: space-evenly;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        animation-duration: 3.1s;
        animation-name: slidein;
    }

    form, label, input, button {
        margin: 10px;
    }

    input, button {
        padding: 10px;
        border-radius: 10px;
    }

    input {
        background-color: #3a506b;
        border: 2px solid #5bc0be;
        color: #5bc0be;
    }

    button {
        font-weight: bold;
        border-radius: 3em;
        border-color: #1abc9c;
        color: #fff;
        background-image: -webkit-linear-gradient(left, rgba(26, 188, 156, 0.6), rgba(26, 188, 156, 0.6) 5%, #1abc9c 5%, #1abc9c 10%, rgba(26, 188, 156, 0.6) 10%, rgba(26, 188, 156, 0.6) 15%, #1abc9c 15%, #1abc9c 20%, rgba(26, 188, 156, 0.6) 20%, rgba(26, 188, 156, 0.6) 25%, #1abc9c 25%, #1abc9c 30%, rgba(26, 188, 156, 0.6) 30%, rgba(26, 188, 156, 0.6) 35%, #1abc9c 35%, #1abc9c 40%, rgba(26, 188, 156, 0.6) 40%, rgba(26, 188, 156, 0.6) 45%, #1abc9c 45%, #1abc9c 50%, rgba(26, 188, 156, 0.6) 50%, rgba(26, 188, 156, 0.6) 55%, #1abc9c 55%, #1abc9c 60%, rgba(26, 188, 156, 0.6) 60%, rgba(26, 188, 156, 0.6) 65%, #1abc9c 65%, #1abc9c 70%, rgba(26, 188, 156, 0.6) 70%, rgba(26, 188, 156, 0.6) 75%, #1abc9c 75%, #1abc9c 80%, rgba(26, 188, 156, 0.6) 80%, rgba(26, 188, 156, 0.6) 85%, #1abc9c 85%, #1abc9c 90%, rgba(26, 188, 156, 0.6) 90%, rgba(26, 188, 156, 0.6) 95%, #1abc9c 95%, #1abc9c 100%);
        background-image: linear-gradient(to right, rgba(26, 188, 156, 0.6), rgba(26, 188, 156, 0.6) 5%, #1abc9c 5%, #1abc9c 10%, rgba(26, 188, 156, 0.6) 10%, rgba(26, 188, 156, 0.6) 15%, #1abc9c 15%, #1abc9c 20%, rgba(26, 188, 156, 0.6) 20%, rgba(26, 188, 156, 0.6) 25%, #1abc9c 25%, #1abc9c 30%, rgba(26, 188, 156, 0.6) 30%, rgba(26, 188, 156, 0.6) 35%, #1abc9c 35%, #1abc9c 40%, rgba(26, 188, 156, 0.6) 40%, rgba(26, 188, 156, 0.6) 45%, #1abc9c 45%, #1abc9c 50%, rgba(26, 188, 156, 0.6) 50%, rgba(26, 188, 156, 0.6) 55%, #1abc9c 55%, #1abc9c 60%, rgba(26, 188, 156, 0.6) 60%, rgba(26, 188, 156, 0.6) 65%, #1abc9c 65%, #1abc9c 70%, rgba(26, 188, 156, 0.6) 70%, rgba(26, 188, 156, 0.6) 75%, #1abc9c 75%, #1abc9c 80%, rgba(26, 188, 156, 0.6) 80%, rgba(26, 188, 156, 0.6) 85%, #1abc9c 85%, #1abc9c 90%, rgba(26, 188, 156, 0.6) 90%, rgba(26, 188, 156, 0.6) 95%, #1abc9c 95%, #1abc9c 100%);
        background-position: 0 0;
        background-size: 100%;
        -webkit-transition: background 300ms ease-in-out;
        transition: background 300ms ease-in-out;
        animation-duration: 3.1s;
        animation-name: slidein;
        :hover {
            background-position: 100px;
        }
    }

    @keyframes slidein {
        from {
          margin-left: 100%;
        }
      
        to {
          margin-left: 0%;
        }
    }
`