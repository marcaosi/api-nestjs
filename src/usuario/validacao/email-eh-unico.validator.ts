import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { UsuarioRepository } from '../usuario.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint()
export class EmailEhUnicoValidator implements ValidatorConstraintInterface {
  constructor(private usuarioRepository: UsuarioRepository) {}

  async validate(
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const usuarioComEmailExiste = await this.usuarioRepository.existeComEmail(
      value,
    );

    return !usuarioComEmailExiste;
  }
}

export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesDeValidacao,
      constraints: [],
      validator: EmailEhUnicoValidator,
    });
  };
};
