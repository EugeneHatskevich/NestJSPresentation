import { Controller, Post } from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post('/create')
  async createTeam(body) {
    return body;
  }
}
