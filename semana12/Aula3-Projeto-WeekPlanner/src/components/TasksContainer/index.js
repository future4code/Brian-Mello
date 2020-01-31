import React from "react";
import { TasksContainer, TasksContainerHeader, TasksContainerMain, StyledHr } from "../../style/styled"

export function TasksContainerComponent (props) {
    return (
        <TasksContainer key={props.key}>
            <TasksContainerHeader>
                {props.day}
            </TasksContainerHeader>
            <StyledHr/>
            <TasksContainerMain>
                {props.text}
            </TasksContainerMain>
        </TasksContainer>
    )
}