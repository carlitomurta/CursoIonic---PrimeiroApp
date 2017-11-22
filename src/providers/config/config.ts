import { Injectable } from '@angular/core';

const config_file_name = "config";

@Injectable()
export class ConfigProvider {

  constructor() {
  }

  //RETORNA OS DADOS DO LOCALSTORAGE
  getConfigData(): any {
    return localStorage.getItem(config_file_name);
  }
  //GRAVA DADOS NO LOCALSTORAGE
  setConfigData(showSlide?: boolean, name?: string, username?: string) {
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };
    if (showSlide) {
      config.showSlide = showSlide;
    }
    if (name) {
      config.name = name;
    }
    if (username) {
      config.username = username;
    }
    localStorage.setItem(config_file_name, JSON.stringify(config));
  }
}
