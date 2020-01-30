import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Container ,StyledMain, CreateActivityContainer, StyledButton, FormWrapper, StyledSearchTextField, FormSection, DaysContainer } from "../../style/styled";
import Header from "../../components/Header";
import { SelectedDay } from "../../components/SelectForDay";
import { createTask, getTasks } from "../../actions";
import { TasksContainerComponent } from "../../components/TasksContainer"
import Loader from "../../components/Loader";

const CreateTaskForm = [
    {
        name: "text",
        type: "text",
        label: "Tarefa",
        required: true, 
    }
]

class Planner extends React.Component {
  constructor (props) {
    super( props );
    this.state = {
      form: {},
      day: ""
    }
  }

  componentDidMount(dispatch) {
    this.props.getTasks()
  }

  handleInputOnChange = event => {
    const { name, value } = event.target;
  
    this.setState ({ form: { ...this.state.form, [name]: value }});
  }

  
  handleCreateTask = event => {
    event.preventDefault();
    
    const { day } = this.state
    const { text } = this.state.form

    this.props.createTask( text, day )

    this.setState({form: {}})
    this.setState({day:""})
  }

  handleSelectedDayOnChange = event => {
    const { value } = event.target;
    this.setState ({ day: value });
  }
  
  render() {

     const {tasks} = this.props;

     const mondayFilter = tasks.filter((task) => {
       return task.day === "Segunda"
     })

     let orderedMonday;
    
     if(mondayFilter) {
      orderedMonday = mondayFilter.sort((a,b) => {
         if(a.text > b.text) {
           return 1;
         } else if (a.text < b.text) {
           return -1;
         } else {
           return 0
         }
       })
     }

     const tuesdayFilter = tasks.filter((task) => {
      return task.day === "Terça"
    })

    let orderedTuesday;
    
    if(tuesdayFilter) {
      orderedTuesday = tuesdayFilter.sort((a,b) => {
        if(a.text > b.text) {
          return 1;
        } else if (a.text < b.text) {
          return -1;
        } else {
          return 0
        }
      })
    }

    const wednesdayFilter = tasks.filter((task) => {
      return task.day === "Quarta"
    })

    let orderedWednesday;

    if(wednesdayFilter) {
      orderedWednesday = wednesdayFilter.sort((a,b) => {
        if(a.text > b.text) {
          return 1;
        } else if (a.text < b.text) {
          return -1;
        } else {
          return 0
        }
      })
    }

    const thursdayFilter = tasks.filter((task) => {
      return task.day === "Quinta"
    })
    let orderedThursday;
    
    if(thursdayFilter) {
      orderedThursday = thursdayFilter.sort((a,b) => {
        if(a.text > b.text) {
          return 1;
        } else if (a.text < b.text) {
          return -1;
        } else {
          return 0
        }
      })
    }

    const fridayFilter = tasks.filter((task) => {
      return task.day === "Sexta"
    })

    let orderedFriday;
    
    if(fridayFilter) {
      orderedFriday = fridayFilter.sort((a,b) => {
        if(a.text > b.text) {
          return 1;
        } else if (a.text < b.text) {
          return -1;
        } else {
          return 0
        }
      })
    }

    const saturdayFilter = tasks.filter((task) => {
      return task.day === "Sábado"
    })

    let orderedSaturday;
    if(saturdayFilter) {
      orderedSaturday = saturdayFilter.sort((a,b) => {
        if(a.text > b.text) {
          return 1;
        } else if (a.text < b.text) {
          return -1;
        } else {
          return 0
        }
      })
    }

    const sundayFilter = tasks.filter((task) => {
      return task.day === "Domingo"
    })

    let orderedSunday;
    if(sundayFilter) {
      orderedSunday = sundayFilter.sort((a,b) => {
        if(a.text > b.text) {
          return 1;
        } else if (a.text < b.text) {
          return -1;
        } else {
          return 0
        }
      })
    }

    return (
      <Container>
        <Header text="Criar tarefa"/>
        <StyledMain>
          <FormSection>
            <CreateActivityContainer>
              <FormWrapper onSubmit={this.handleCreateTask}>
                {CreateTaskForm.map (input => (
                  <div key = {input.name}>
                      <StyledSearchTextField
                          id = {input.id}
                          name = {input.name}
                          type = {input.type}
                          label = {input.label}
                          value = {this.state.form[input.name] || ""}
                          required = {input.required}
                          onChange = {this.handleInputOnChange}
                          pattern = {input.pattern}
                      />
                  </div>
                ))}
                <SelectedDay 
                  name= "day" 
                  value= {this.state.day}
                  onChange= {this.handleSelectedDayOnChange}
                />
                <StyledButton type="submit">Criar Tarefa</StyledButton>
              </FormWrapper>
            </CreateActivityContainer>
          </FormSection>
          <DaysContainer>
            <TasksContainerComponent 
              day="Monday" 
              text = {orderedMonday.map((task) => <Fragment><p>{task.text}</p></Fragment>)}
            />
            <TasksContainerComponent 
              day="Tuesday" 
              text = {orderedTuesday.map((task) => <Fragment><p>{task.text}</p></Fragment>)}
            />
            <TasksContainerComponent 
              day="Wednesday" 
              text = {orderedWednesday.map((task) => <Fragment><p>{task.text}</p></Fragment>)}
            />
            <TasksContainerComponent 
              day="Thursday" 
              text = {orderedThursday.map((task) => <Fragment><p>{task.text}</p></Fragment>)}
            />
            <TasksContainerComponent 
              day="Friday" 
              text = {orderedFriday.map((task) => <Fragment><p>{task.text}</p></Fragment>)}
            />
            <TasksContainerComponent 
              day="Saturday" 
              text = {orderedSaturday.map((task) => <Fragment><p>{task.text}</p></Fragment>)}
            />
            <TasksContainerComponent 
              day="Sunday" 
              text = {orderedSunday.map((task) => <Fragment><p>{task.text}</p></Fragment>)}
            />
          </DaysContainer>
        </StyledMain>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.allTasks,
  
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (text, day) => dispatch(createTask(text, day)),
  getTasks: () => dispatch(getTasks())
})

export default connect( mapStateToProps, mapDispatchToProps)(Planner);
