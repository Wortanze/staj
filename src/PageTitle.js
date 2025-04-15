import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitle() {
  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "RESIDENT | Журнал о роскошном образе жизни";
        break;
      case "/contacts":
        document.title = "RESIDENT | Контакты";
        break;
        case "/property":
        document.title = "RESIDENT | Недвижимость";
        break;
        case "/rest":
        document.title = "RESIDENT | Роскошный отдых";
        break;
        case "/design":
        document.title = "RESIDENT | Дизайн";
        break;
        case "/product":
        document.title = "RESIDENT | Продукты";
        break;
        case "/interview":
        document.title = "RESIDENT | Интервью";
        break;
        case "/aboutus":
        document.title = "RESIDENT | О Нас";
        break;
        case "/rest/article":
        document.title = "RESIDENT | Статья";
        break;
      default:
        document.title = "RESIDENT | Не найдено";
    }
  }, [location.pathname]);
  return null;
}

export default PageTitle;
