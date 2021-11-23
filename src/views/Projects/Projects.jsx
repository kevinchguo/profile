import React from "react";
import style from "./Projects.module.scss";

const Projects = () => {
  return (
    <>
      <ul>
        <li>
          <a
            href="https://kevins-weather-app.netlify.app"
            className="header1"
            target="_blank"
            rel="noopener noreferrer"
          >
            WeatherApp:
          </a>
          <p className="description">
            A personal project aiming to display relavent information without
            the extra steps. This project was built with React, TypeScript,
            Victory (Formidable), and the OpenWeatherAPI.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/danieltichiyama/queue_app"
            className="header1"
            target="_blank"
            rel="noopener noreferrer"
          >
            QueueApp:
          </a>
          <p className="description">
            A JavaScript web application targeted at making reservation tracking
            and queue management for retailers easier during the Covid-19
            pandemic.
          </p>
        </li>
        <li>
          <a
            href="https://nocan.design/"
            className="header1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blurange:
          </a>
          <p className="description">
            A web application that transforms an uploaded resume or LinkedIn
            data into a personalized and editable website portfolio for
            developers. Created with a team of 5 people during DevLeague as a
            final Project.
          </p>
        </li>
        <li>
          <a
            href="https://github.com/kevinchguo/toodoo"
            className="header1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kanbanban:
          </a>
          <p className="description">
            A recreation of the popular web app Trello, where you can create
            multiple boards and add lists and tasks for each board.
          </p>
        </li>
        <li>
          <a
            href="https://globalgamejam.org/2020/games/arm-simulator-3"
            className="header1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arm Stimulator:
          </a>
          <p className="description">
            A game inspired by the famous ragdoll game QWOP where you control an
            arm instead of legs.
          </p>
        </li>
      </ul>
    </>
  );
};

export default Projects;
