import { Action } from "../app/enums/action.enum";
import { Article } from "./article.model";

export interface UpdateArticleArgs {
    article?: Article,
    action?: Action
}