import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Container ,StyledMain, CreateActivityContainer, StyledButton, FormWrapper, StyledSearchTextField } from "../../style/styled";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { SelectedDay } from "../../components/SelectForDay"
import { createTask, getTasks } from "../../actions"


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
  }

  handleSelectedDayOnChange = event => {
    const { value } = event.target;
    this.setState ({ day: value });
  }
  
  render() {
    
    return (
      <Container>
        <Header text="Criar tarefa"/>
        <StyledMain>
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
          {/* {this.props.tasks.map((task) => {
            <Fragment>
              <p>{task.text}</p>
              <p>{task.day}</p>
            </Fragment>
          })} */}
          {/* <Loader/> */}
        </StyledMain>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.allTasks
})

const mapDispatchToProps = (dispatch) => ({
  createTask: (text, day) => dispatch(createTask(text, day)),
  getTasks: () => dispatch(getTasks())
})

export default connect( mapStateToProps, mapDispatchToProps)(Planner);
