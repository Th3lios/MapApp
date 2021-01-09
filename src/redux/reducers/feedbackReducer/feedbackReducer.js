import messages from '../../../constants/messages';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const SHOW_MESSAGE_BY_CODE = 'SHOW_MESSAGE_BY_CODE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const SHOW_LOADING = 'SHOW_LOADING';

const initialState = {
  loading: false,
  scrollIsLoading: false,
  viewLoading: true,
  message: undefined,
};

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      console.log('[messagesReducer::SHOW_LOADING] action.data: ', action.data);
      return {
        ...state,
        loading: action.data,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: undefined,
      };
    case SHOW_MESSAGE:
      console.log('[messagesReducer::SHOW_MESSAGE] message: ', action.data);
      return {
        ...state,
        message: action.data,
      };
    case SHOW_MESSAGE_BY_CODE: {
      console.log('[messagesReducer::SHOW_MESSAGE_BY_CODE]');
      const message = Object.values(messages).find(
        (msg) => msg.code === action.data,
      );
      console.log('[messagesReducer::SHOW_MESSAGE_BY_CODE] message: ', message);
      return {
        ...state,
        message,
      };
    }
    default:
      return state;
  }
};
