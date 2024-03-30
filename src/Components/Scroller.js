import React, { useState, useRef } from "react";
import './Scroller.css';
import { Categories } from "./Explore";
import styled from "styled-components";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Scroller() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const tabsBoxRef = useRef(null);

  const handleMouseDown = (e) => {
    if (tabsBoxRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - tabsBoxRef.current.offsetLeft);
      setScrollLeft(tabsBoxRef.current.scrollLeft);
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - tabsBoxRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabsBoxRef.current.scrollLeft = scrollLeft - walk;
  }

  const handleMouseUp = () => {
    setIsDragging(false);
  }

  const handleClick = (direction, e) => {
    e.preventDefault();
    if (tabsBoxRef.current) {
      tabsBoxRef.current.scrollLeft += direction === "left" ? -80 : 80;
    }
  }

  return (
    <Wrapper>
      <Container>
        <ChevronLeftIcon
          className="icon"
          id="left"
          onClick={(e) => handleClick("left", e)}
        />
        <ul
          className={`tabs-box ${isDragging ? 'dragging' : ''}`}
          ref={tabsBoxRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {Categories.map((e, index) => {
            return <li key={index}><button className="tabs">{e.main}</button></li>
          })}
        </ul>
        <ChevronRightIcon
          className="icon"
          id="right"
          onClick={(e) => handleClick("right", e)}
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    padding: 0 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    overflow-x: hidden;
    flex: 100%;
    margin-left: 80px;
    margin-right: 80px;
    

    .icon {
        position: absolute;
        top: 77px;
        background-color: rgb(16,12,8);
        height: 30px;
        width: 30px;
        margin: 0px 10px 0px 10px;
        cursor: pointer;
        box-shadow: 0 0 5px 10px rgb(16,12,8);
        display: flex;
        align-items: center;
        color: #f1f1f1;
    }

    .icon:hover {
        border-radius: 50%;
        background: rgba(180, 179, 179, .7);
        color: #f1f1f1;
    }

    .tabs-box.dragging {
        cursor: grabbing;
        user-select: none;
    }
`

export default Scroller;
