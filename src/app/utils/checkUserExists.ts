import { $defaultUser } from '../store/store.js';

export const checkUserExists = async (name: string, password: string) => {
    // Здесь должна быть логика обращения к базе данных и проверки наличия пользователя
    // Для примера мы просто проверим, соответствуют ли имя и пароль значениям по умолчанию
    const defaultUser = $defaultUser.get();
    return name === defaultUser.name && password === defaultUser.password;
  };