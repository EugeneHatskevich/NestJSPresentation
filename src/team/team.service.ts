import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamRO } from './interface/team.interface';

@Injectable()
export class TeamService {
  async create(body: CreateTeamDto): Promise<TeamRO> {
    const result: TeamRO = {
      id: 1,
      name: body.name,
      description: body.description,
      created_at: new Date(),
    };
    return result;
  }
}
