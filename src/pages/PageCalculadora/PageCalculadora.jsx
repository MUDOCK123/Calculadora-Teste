"use client";

import { useState } from "react";
import { MdBackspace } from "react-icons/md";

export default function PageCalculadora() {
  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    const valor = e.currentTarget.textContent;
    setDisplay((prev) => prev + valor);
  };
  const handleClickBackspace = (e) => {
    setDisplay((prev) => prev.slice(0, -1));
  };
  const handleClickDel = (e) => {
    setDisplay("");
  };
  const handleResult = () => {
    const result = eval(display);
    let formatado;

    // Se tem parte decimal, limita para 5 casas
    if (result % 1 !== 0) {
      formatado = parseFloat(result.toFixed(5));
    } else {
      formatado = result;
    }

    setDisplay(String(formatado));
  };

  return (
    <>
      <div className="flex flex-col mx-auto justify-center items-center p-4 w-full h-auto lg:max-w-[400px] text-white">
        <div className="w-full bg-cyan-700 border-b-[3px] border-solid border-gray-700 rounded-t-[12px]">
          <div className="flex flex-row justify-between w-full p-4">
            <p className="text-[20px]">Calculadora</p>
            <p className="text-[20px]">Faça sua conta aqui</p>
          </div>
        </div>
        <div className="flex flex-col w-full bg-blue-400 rounded-b-[12px]">
          <div className="flex justify-end items-center p-4 h-[150px]">
            <p className="text-[50px]">{display || "0"}</p>
          </div>
          <div className="flex flex-col mx-auto gap-1 p-4 text-[30px] mt-10 w-full">
            <div className="flex justify-center flex-row gap-1 w-full">
              <button
                onClick={handleClickDel}
                className="flex bg-blue-950 justify-center items-center rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                C
              </button>
              <button
                onClick={handleClickBackspace}
                className="flex bg-blue-950 justify-center items-center rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                <MdBackspace />
              </button>
              <button
                value="/"
                onClick={handleClick}
                className="flex bg-blue-950 justify-center items-center rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                /
              </button>
            </div>
            <div className="flex justify-center flex-row gap-1 w-full">
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                7
              </button>
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                8
              </button>
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                9
              </button>
              <button
                value="*"
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                *
              </button>
            </div>
            <div className="flex justify-center flex-row gap-1 w-full">
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                4
              </button>
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                5
              </button>
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                6
              </button>
              <button
                value="-"
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                -
              </button>
            </div>
            <div className="flex justify-center flex-row gap-1 w-full">
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                1
              </button>
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                2
              </button>
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                3
              </button>
              <button
                value="+"
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                +
              </button>
            </div>
            <div className="flex justify-center gap-1 w-full">
              <button
                value="="
                onClick={handleResult}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                =
              </button>
              <button
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                0
              </button>
              <button
                value="-"
                onClick={handleClick}
                className="bg-blue-950 rounded-[12px] h-[60px] w-full hover:cursor-pointer hover:opacity-80"
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
