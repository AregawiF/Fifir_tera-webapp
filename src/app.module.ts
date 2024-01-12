import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { Reflector } from '@nestjs/core';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AuthModule,RecipeModule],
  providers: [ Reflector, JwtStrategy]
})
export class AppModule { }
