import { FastifyInstance } from "fastify";

export default async function AppRoutes(app: FastifyInstance) {
    app.post('/auth', () => {})
    app.get('/user/ads', () => {})
    app.delete('/user/delete/:adId', () => {})
    
    app.post('/ad', () => {})
    app.get('/ad/:gameId', () => {})
    app.get('/ad/recents', () => {})
    app.get('/discord/adId', () => {})

    app.get('/games', () => {})
    app.get('/famous/game', () => {})
    app.get('/game/:categoryId', () => {})

    app.get('/category', () => {})
}