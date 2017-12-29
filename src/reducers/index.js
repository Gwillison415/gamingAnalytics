
import {combineReducers} from 'redux';
import {DataReducer} from './dataReducer';
import {ToolbarReducer} from './toolbarReducer';

export const rootReducer = combineReducers({
  data: DataReducer,
  toolbar: ToolbarReducer
})
