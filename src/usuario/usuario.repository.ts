import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  salvar(usuario: any) {
    this.usuarios.push(usuario);
  }

  get() {
    return this.usuarios;
  }
}
