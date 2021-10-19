import axios from "axios";
import { CreateUserDto, LoginDto, ResponseCreateUserDto } from "./types";

const instance = axios.create({
  baseURL: "http://localhost:7777/",
});

export const UserApi = {
  async register(dto: CreateUserDto): Promise<ResponseCreateUserDto> {
    const { data } = await instance.post<
      CreateUserDto,
      { data: ResponseCreateUserDto }
    >("/auth/register", dto);
    return data;
  },

  async login(dto: LoginDto) {
    const { data } = await instance.post("/auth/login", dto);
    return data;
  },
};
