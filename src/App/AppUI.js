import React from "react";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";

import { TodoContext } from "../TodoContext";


function AppUI(){

    const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
          
          <TodoCounter />
          <TodoSearch/>

          <TodoList>
            { loading &&
              <>
                <TodosLoading/> 
                <TodosLoading/> 
                <TodosLoading/>
              </> 
            } 
            { error && <TodosError/> }
            { (!loading && searchedTodos.length === 0 ) && <TodosEmpty/> }
            
            {
              searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={ 
                    () => completeTodo(todo.text)
                  }
                  onDelete={
                    () => deleteTodo(todo.text)
                  }
                />
              ))
            }
          </TodoList>
            
          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
          
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>

          )}
          
        </React.Fragment>
      );
}

export { AppUI }