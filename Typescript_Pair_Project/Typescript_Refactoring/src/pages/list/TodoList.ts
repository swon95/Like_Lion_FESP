// 목록 페이지
import Footer from "../../layout/Footer";
import { linkTo } from "../../Router";
import defaultInstance from '../../types/baseURL';


const getData = async () => {
    try {
        const response = await defaultInstance.get(`/todolist`);
        return response.data?.items;
    } catch (e) {
        console.error(e);
    }
};

// All, Todo, Done 네비게이터
let menu = "Todo";

const displayCategory = (parent: HTMLElement) => {
    const ul = document.createElement("ul");
    ul.classList.add("category-list");

    const liAll = document.createElement("li");
    liAll.classList.add("category-item");
    liAll.textContent = "📋 All";

    const liTodo = document.createElement("li");
    liTodo.classList.add("category-item");
    liTodo.textContent = "📝 Todo";

    const liDone = document.createElement("li");
    liDone.classList.add("category-item");
    liDone.textContent = "✅ Done";

    [liAll, liTodo, liDone].forEach((li) => {
        if (li.textContent?.includes(menu)) {
            li.classList.add("active");
        }

        li.addEventListener("click", (event: Event) => {
            const target = event.target as HTMLElement
            menu = target.textContent!;

            [liAll, liTodo, liDone].forEach((i) =>
                i.classList.remove("active")
            );
            target.classList.add("active");

            displayList();
        });
    });

    ul.append(liAll, liTodo, liDone);
    parent.append(ul);
};

// 추가한 목록 리스트
const displayList = async () => {
    const frag = document.createDocumentFragment();
    const dataAll: TodoListMain[] = await getData();

    let data: TodoListMain[] | undefined;
    
    if (menu.includes("Todo")) {
        data = dataAll.filter((i) => !i.done);
    } else if (menu.includes("Done")) {
        data = dataAll.filter((i) => i.done);
    } else {
        data = dataAll;
    }

    data?.sort((a, b) => + new Date(b.updatedAt) - + new Date(a.updatedAt)).forEach(
        (item) => {
            const li = document.createElement("li");
            const todoInfoLink = document.createElement("a");
            todoInfoLink.setAttribute("href", `info?_id=${item._id}`);
            todoInfoLink.classList.add("list-item");

            const div = document.createElement("div");

            const checkbox = document.createElement("input");
            checkbox.classList.add("list-item__check");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", String(item._id));

            checkbox.addEventListener("change", async function () {
                await defaultInstance.patch(`/todolist/${item._id}`, {
                    done: this.checked,
                });
                displayList();
            });

            const label = document.createElement("label");
            label.classList.add("list-item__title");
            label.textContent = item.title;

            todoInfoLink.addEventListener("click", function (event: Event) {
                
                const target = event.target as HTMLInputElement
                
                if (target.type !== "checkbox") {
                    event.preventDefault();
                    linkTo(todoInfoLink.getAttribute("href")!);
                }
            });

            if (item.done) {
                todoInfoLink.classList.add("done");
                checkbox.setAttribute("checked", "true");
            }

            div.append(checkbox, label);

            const date = document.createElement("p");
            date.setAttribute("class", "list-item__date");
            date.textContent = item.updatedAt.slice(0, 11);

            todoInfoLink.append(div, date);
            li.appendChild(todoInfoLink);
            frag.appendChild(li);
        }
    );

    const listContainer = document.querySelector(".list-container")
    // 타입 단언으로 null 값 알려주기 Nullable Types(nullable types)
    listContainer!.textContent = ""
    listContainer!.appendChild(frag)
};

// Root
const TodoList = async function () {
    const page = document.createElement("div");
    page.setAttribute("id", "page");

    const content = document.createElement("div");
    content.setAttribute("id", "content");

    try {
        displayCategory(content);

        const listContainer = document.createElement("ul");
        listContainer.setAttribute("class", "list-container");
        displayList();

        content.appendChild(listContainer);

        const btnRegist = document.createElement("button");
        btnRegist.classList.add("enrollment");
        btnRegist.textContent = "";

        btnRegist.addEventListener("click", () => {
            linkTo("regist");
        });

        content.appendChild(btnRegist);
    } catch (err) {
        console.error(err); // Console에서 에러 확인 가능
        const error = document.createTextNode("일시적인 오류 발생");
        content.appendChild(error);
    }

    page.appendChild(content);
    page.appendChild(Footer());

    return page;
};

export default TodoList;
