import { GetListsResponseList } from '../../domain/models/list';

export const lists: GetListsResponseList[] = [
  {
    id: 'mammal',
    name: '哺乳類',
    createdAt: '2024-11-30T15:00:00Z',
    animals: ['araiguma', 'cheetah', 'kaba', 'kuma', 'lion', 'ookami', 'usagi', 'zou'],
  },
  {
    id: 'bird',
    name: '鳥類',
    createdAt: '2024-11-30T15:00:00Z',
    animals: ['duck', 'niwatori'],
  },
  {
    id: 'herbivore',
    name: '草食動物',
    createdAt: '2024-11-30T15:00:00Z',
    animals: ['usagi', 'zou'],
  },
  {
    id: 'carnivore',
    name: '肉食動物',
    createdAt: '2024-11-30T15:00:00Z',
    animals: ['cheetah', 'lion', 'ookami'],
  },
  {
    id: 'omnivore',
    name: '雑食動物',
    createdAt: '2024-11-30T15:00:00Z',
    animals: ['araiguma', 'duck', 'kaba', 'kuma', 'niwatori'],
  },
];
