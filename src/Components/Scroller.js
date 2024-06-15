import React, { useState, useRef, useEffect } from "react";
import './Scroller.css';
import styled from "styled-components";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Categories = [
  {
    main: "Abstract",
    sub: "Geometric,Pattern,Background"
  },
  {
    main: "Agriculture",
    sub: "Harvest,Crops,Farming"
  },
  {
    main: "Architecture",
    sub: "Buildings,Design"
  },
  {
    main: "Australia",
    sub: "Sydney,Great barrier reef, Surfing",
  },
  {
    main: "Black & white",
    sub: "Season, Thanks Giving, Halloween",
  },
  {
    main: "Background",
    sub: "Greyscale, Film, Fine art",
  },
  {
    main: "Business",
    sub: "Corporate, Engineering, Science",
  },
  {
    main: "Celebraties",
    sub: "Catwalk, Red carpet, Music",
  },
  {
    main: "Christmas",
    sub: "Holiday, Xmas, December",
  },
  {
    main: "Cities",
    sub: "Travel, Skyscrapper, suburb",
  },
  {
    main: "Colors",
    sub: "Tone,Bright,Bold,Colorful",
  },
  {
    main: "Concepts",
    sub: "Creative, Illusion, Storytelling",
  },
  {
    main: "Culture",
    sub: "Art, Fashion, Tradition",
  },
  {
    main: "Cut-outs",
    sub: "Design, Creative, Artwork",
  },
  {
    main: "Entertainment",
    sub: "TV, Concert, Music",
  },
  {
    main: "Environment",
    sub: "Eco-friendly, Climate change, Plastic free",
  },
  {
    main: "Everyday",
    sub: "People, Lifestyle, Authentic",
  },
  {
    main: "Families",
    sub: "Relationship, Children, Love",
  },
  {
    main: "Fashion",
    sub: "Trendy, Clothing, Designer",
  },
  {
    main: "Flowers",
    sub: "Horticulture, Green, Botany",
  },
  {
    main: "Food",
    sub: "Flavours, Cuisine, Cooking",
  },
  {
    main: "Germany",
    sub: "Europe, Berlin, Denmark",
  },
  {
    main: "Health",
    sub: "Health, Make-up, calm",
  },
  {
    main: "Historical",
    sub: "Archive, Obituaries, World events",
  },
  {
    main: "India",
    sub: "Asia, Pakistan, Culture",
  },
  {
    main: "Industry",
    sub: "Building, Construction sites, Engineering",
  },
  {
    main: "Landscapes",
    sub: "Scenery, Geography, Earth",
  },
  {
    main: "Lifestyle",
    sub: "Culture, Hobbies, Leisure",
  },
  {
    main: "Love",
    sub: "Relationship, Friendship, Family",
  },
  {
    main: "Memorabilia",
    sub: "Events, Festivals, Singers",
  },
  {
    main: "Middle-east",
    sub: "People, Culture, Tradition",
  },
  {
    main: "Motion",
    sub: "Sports, Lifestyle, Festivals",
  },
  {
    main: "News",
    sub: "Breaking stories, Global events, TV & Film",
  },
  {
    main: "Nostalgia",
    sub: "Retro, 90's, Fashion",
  },
  {
    main: "Pets",
    sub: "Animals, Family, Home",
  },
  {
    main: "Science",
    sub: "Mathematics, Biology, Scientist",
  },
  {
    main: "Sports",
    sub: "Football, Cricket, Kabaddi",
  },
  {
    main: "Spring",
    sub: "Season, Easter, fresh",
  },
  {
    main: "Still-life",
    sub: "Objects, Art, Creative",
  },
  {
    main: "Summer",
    sub: "Season, Sunshine, Holiday",
  },
  {
    main: "Teaching",
    sub: "Education, School, Children",
  },
  {
    main: "Technology",
    sub: "Education, Science, Innovation",
  },
  {
    main: "Transport",
    sub: "Train line, Airports, Buses",
  },
  {
    main: "Travel",
    sub: "Adventure, Traveller, Explore",
  },
  {
    main: "UK",
    sub: "London, Monarchy",
  },
  {
    main: "US",
    sub: "Washington DC, President",
  },
  {
    main: "Wildlife",
    sub: "Animals, Creatures, Eco-system",
  },
  {
    main: "Winter",
    sub: "Season, Christmas, Snow",
  },
  {
    main: "Wonders",
    sub: "Animals, Creatures, Eco-system",
  },
  {
    main: "Others",
    sub: "",
  },
];

function Scroller() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const tabsBoxRef = useRef(null);

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const checkScrollPosition = () => {
    if (tabsBoxRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsBoxRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const handleMouseDown = (e) => {
    if (tabsBoxRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - tabsBoxRef.current.offsetLeft);
      setScrollLeft(tabsBoxRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - tabsBoxRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabsBoxRef.current.scrollLeft = scrollLeft - walk;
    checkScrollPosition();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (tabsBoxRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - tabsBoxRef.current.offsetLeft);
      setScrollLeft(tabsBoxRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - tabsBoxRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    tabsBoxRef.current.scrollLeft = scrollLeft - walk;
    checkScrollPosition();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (direction, e) => {
    e.preventDefault();
    if (tabsBoxRef.current) {
      tabsBoxRef.current.scrollLeft += direction === "left" ? -80 : 80;
      setTimeout(checkScrollPosition, 100);  // Adding a slight delay to allow the scroll to complete
    }
  };

  return (
    <Wrapper>
      <Container>
        {canScrollLeft && (
          <ChevronLeftIcon
            className="icon"
            id="left"
            onClick={(e) => handleClick("left", e)}
          />
        )}
        <ul
          className={`tabs-box ${isDragging ? 'dragging' : ''}`}
          ref={tabsBoxRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onScroll={checkScrollPosition}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {Categories.map((e, index) => {
            return <li key={index}><button className="tabs">{e.main}</button></li>
          })}
        </ul>
        {canScrollRight && (
          <ChevronRightIcon
            className="icon"
            id="right"
            onClick={(e) => handleClick("right", e)}
          />
        )}
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
`;

const Container = styled.div`
    overflow-x: hidden;
    flex: 100%;
    margin-left: 80px;
    margin-right: 80px;
    position: relative;

    .icon {
        position: absolute;
        top: 65%;
        transform: translateY(-50%);
        background-color: rgb(16,12,8);
        height: 30px;
        width: 30px;
        cursor: pointer;
        box-shadow: 0 0 5px 10px rgb(16,12,8);
        display: flex;
        align-items: center;
        color: #f1f1f1;
    }

    .icon#left {
        left: 0;
    }

    .icon#right {
        right: 0;
    }

    .icon:hover {
        border-radius: 50%;
        background: rgba(180, 179, 179, .7);
        color: #f1f1f1;
    }

    .tabs-box {
        display: flex;
        gap: 10px;
        overflow-x: scroll;
        scroll-behavior: smooth;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
    }

    .tabs-box::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera */
    }

    .tabs-box.dragging {
        cursor: grabbing;
        user-select: none;
    }
`;

export default Scroller;
