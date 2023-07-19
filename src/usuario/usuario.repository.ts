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

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}
