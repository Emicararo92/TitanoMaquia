import styles from "../../style/game.module.css";

function Game() {
  return (
    <section className={styles.gameDescription}>
      <h2>Infinite Pathways</h2>
      <p>
        <strong>Infinite Pathways</strong> is a puzzle game centered around
        solving challenges using a single object: a cube. This cube serves as
        the main character and has only one ability — the power to move by
        rotating itself. The core gameplay mechanic revolves around being aware
        of which face of the cube is on the ground after each move. Matching the
        bottom face with the symbols or colors on the ground earns points and
        enables progression through the game.
      </p>
      <p>
        The main inspiration for this game comes from <em>Endorfun</em>, a 1995
        puzzle game that also features a cube where rotation is the key to
        solving various levels.
      </p>
      <p>
        <strong>Infinite Pathways</strong> features two main game modes:
      </p>
      <ul>
        <li>
          <strong>Adventure Mode:</strong> The primary mode where players
          progress through different zones (islands). These zones are initially
          locked and can only be accessed by solving the challenges in each
          level. The difficulty increases as the player advances. Additionally,
          progression in this mode unlocks cosmetic extras for the second mode.
        </li>
        <li>
          <strong>Challenge Mode:</strong> A more direct and classic mode, where
          players can choose different game types and difficulties without
          having to follow a level progression. This includes options like the
          “Zen Mode,” where the game never ends and there’s no way to lose, or
          “Dynamic Grid Mode,” where the grid gradually shrinks over time,
          making survival more difficult the longer you play.
        </li>
      </ul>
      <p>
        The game features a dreamlike and surreal visual style, with
        non-realistic, minimalistic, and colorful level designs. In contrast,
        the music aims to defy expectations — instead of a fixed style, players
        can switch between different soundtracks. However, each zone has a
        default musical style from one of three categories: classical, jazz, or
        psychedelic/experimental.
      </p>
    </section>
  );
}

export default Game;
