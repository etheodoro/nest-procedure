import { Injectable, Param } from '@nestjs/common';
import { ConnectionUser } from 'src/data/ConnectionUser';
import { UserDTO } from 'src/dto/UserDTO';

@Injectable()
export class UserService {

    private connection: ConnectionUser;

    constructor() {
        this.connection = new ConnectionUser();
    }

    async findUsers() {

        const pool = this.connection.getPoolConnection();
        await pool.connect();

            try {
                await pool.connect();
                const result = await pool.request()
                    .execute(`PR_BUSCA_USUARIOS`);
                const users = result.recordset;

                return users;
            } catch (error) {
                console.error(error);
            }
            return null;
    }

    async findByDto(userDto: UserDTO) {

        const pool = this.connection.getPoolConnection();
        await pool.connect();

            try {
                await pool.connect();
                const result = await pool.request()
                    .input('NAME', userDto.nome)
                    .input('DAT_NASCIMENTO', userDto.datNascimento)
                    .execute(`PR_BUSCA_USUARIOS_POR_DTO`);
                const users = result.recordset;

                return users;
            } catch (error) {
                console.error(error);
            }
            return null;
    }

    async findUser(name: string) {
        
        const pool = this.connection.getPoolConnection();
        await pool.connect();

            try {
                await pool.connect();
                const result = await pool.request()
                    .input('NAME', name)
                    .execute(`PR_BUSCA_USUARIOS_POR_NOME`);
                const users = result.recordset;

                return users;
            } catch (error) {
                console.error(error);
            }
            return null;
    }


}
