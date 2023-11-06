import TodoList from './pages/list/TodoList';
import TodoRegist from './pages/regist/TodoRegist';
import TodoInfo from './pages/info/TodoInfo';
import Error404 from './pages/errors/Error404';

async function getPage() {
  let page;

  switch (location.pathname) {
    case '/':
      page = await TodoList();
      break;
    case '/regist':
      page = TodoRegist();
      break;
    case '/info':
      page = await TodoInfo();
      break;
    default:
      page = Error404();
  }

  return page;
}

async function render() {
  const page = await getPage();
  document.querySelector('#page')!.replaceWith(page);
}

window.addEventListener('popstate', render);

export function linkTo(url: string) {
  history.pushState({}, 'todo', url);
  render();
}

const Router = async function () {
  return await getPage();
};

export default Router;
