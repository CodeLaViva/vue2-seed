import { Module, VuexModule, Mutation, Action} from 'vuex-module-decorators';
import store from '@/store';

@Module({namespaced: true, dynamic: true, name: 'app', store})
export class App extends VuexModule {
  public config: object = {};

  @Mutation
  private SET_CONFIG(config: object) {
    this.config = config;
  }

  @Action({ commit: 'SET_CONFIG' })
  setConfig(config: object) {
    return config;
  }
}