"use client";
import AnimatedList from "@/components/AnimatedList";
import BlurText from "@/components/BlurText";
import Cubes from "@/components/Cubes";
import ElectricBorder from "@/components/ElectricBorder";
import FallingText from "@/components/FallingText";
import FloatingLines from "@/components/FloatingLines";
import FluidGlass from "@/components/FluidGlass";
import GlassSurface from "@/components/GlassSurface";
import InfiniteMenu from "@/components/InfiniteMenu";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import SplashCursor from "@/components/SplashCursor";
import StickerPeel from "@/components/StickerPeel";
import TargetCursor from "@/components/TargetCursor";
import TextCursor from "@/components/TextCursor";
import TextPressure from "@/components/TextPressure";
import TrueFocus from "@/components/TrueFocus";
import { div } from "motion/react-client";
import React from "react";
import { File, Search, Settings } from "lucide-react";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";
const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];
const items2 = [
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];
const Home = () => {
  const handleAnimationComplete = () => {
    console.log("Animation complete");
  };
  return (
    <div>
      <div className="relative h-[500px] w-full overflow-hidden flex items-center justify-center">
        <OrbitingCircles className="size-40" duration={20} radius={80}>
          <File />
          <Settings />
          <File />
        </OrbitingCircles>

        <OrbitingCircles className="size-80" duration={30} reverse radius={140}>
          <File />
          <Settings />
          <File />
          <Search />
        </OrbitingCircles>
      </div>
      <div
        style={{
          width: "100%",
          height: "600px",
          position: "relative",
          zIndex: 10,
        }}
      >
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
        <div className="absolute inset-0 top-0 left-0  h-full w-full text-white flex items-center justify-center pointer-events-none">
          Hello world
        </div>
      </div>
      <div className="h-100 w-100">
        {" "}
        <InfiniteMenu items={items2} scale={1} />
      </div>
      <div className="">
        <ScrollStack className="max-h-100 overflow-y-auto">
          <ScrollStackItem itemClassName="bg-green-400">
            <h2>Card 1</h2>
            <p>This is the first card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="bg-blue-400">
            <h2>Card 2</h2>
            <p>This is the second card in the stack</p>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="bg-red-400">
            <h2>Card 3</h2>
            <p>This is the third card in the stack</p>
          </ScrollStackItem>
        </ScrollStack>
      </div>

      <div>
        <AnimatedList
          items={items}
          onItemSelect={(item, index) => console.log(item, index)}
          showGradients
          enableArrowNavigation
          displayScrollbar
          itemClassName="bg-red-500"
        />
      </div>
      {/* <SplashCursor /> */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2">
        {" "}
        <GlassSurface width={300} height={100} borderRadius={50}>
          aa
        </GlassSurface>
      </div>
      <div style={{ height: "600px", position: "relative", zIndex: -5 }}>
        <Cubes
          gridSize={8}
          maxAngle={45}
          radius={3}
          borderStyle="2px dashed #B19EEF"
          faceColor="#1a1a2e"
          rippleColor="#ff6b6b"
          rippleSpeed={1.5}
          autoAnimate
          rippleOnClick
        />
      </div>
      <StickerPeel
        imageSrc={"https://cdn-icons-png.flaticon.com/256/11172/11172333.png"}
        width={200}
        rotate={0}
        peelBackHoverPct={30}
        peelBackActivePct={40}
        shadowIntensity={0.5}
        lightingIntensity={0.1}
        initialPosition={{ x: -100, y: 100 }}
        peelDirection={0}
      />
      {/* <div className="bg-black text-white">
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />

        <h1>Hover over the elements below</h1>
        <button className="cursor-target">Click me!</button>
        <div className="cursor-target">Hover target</div>
      </div> */}
      <div className="w-100 min-h-100 bg-black text-white">
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          style={{ borderRadius: 16, height: "100%" }}
        >
          <div className="h-100 p-5">
            <p style={{ margin: "6px 0 0", opacity: 0.8 }}>
              A glowing, animated border wrapper.
            </p>
          </div>
        </ElectricBorder>
      </div>
      <TrueFocus
        sentence="True Focus Element"
        manualMode={false}
        blurAmount={5}
        borderColor="#5227FF"
        animationDuration={0.5}
        pauseBetweenAnimations={1}
      />
      <div className="h-100 border">
        <TextCursor
          text="😍"
          spacing={80}
          followMouseDirection
          randomFloat
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={10}
        />
      </div>
      <BlurText
        text="Isn't this so cool?!"
        delay={200}
        animateBy="words"
        direction="top"
        stepDuration={0.5}
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />
      <TextPressure
        text="Hello!"
        flex
        alpha={false}
        stroke={false}
        width
        weight
        italic
        textColor="#000000"
        strokeColor="#5227FF"
        minFontSize={16}
      />
      <div className="h-100 border">
        <FallingText
          text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
          highlightWords={[
            "React",
            "Bits",
            "animated",
            "components",
            "simplify",
          ]}
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </div>
  );
};

export default Home;
