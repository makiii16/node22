import {JwtModule} from "@nestjs/jwt";
import {Module} from "@nestjs/common";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'secret',
            signOptions: { expiresIn: '1d' },
        }),
    ],
    exports: [
        JwtModule
    ]
})
export class CommonModule {}
