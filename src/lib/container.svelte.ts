
interface Container {
  width: number;
  height: number;
}

export const container = $state<Container>({
  width: 0,
  height: 0
});
