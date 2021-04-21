import  {Request, Response} from "express";
import { getCustomRepository } from "typeorm"
import { SettingsRepository } from "../repositories/SettingsReposiory"

class SettingsController{
    async create(req: Request, res: Response){
        const { chat, username} = req.body;
        const settingsRepository = getCustomRepository(SettingsRepository) // Importando o repositorio do settings
    
        const settings = settingsRepository.create({
            chat,
            username
        })
    
        await settingsRepository.save(settings)
    
        return res.json(settings)
    }
}

export { SettingsController }