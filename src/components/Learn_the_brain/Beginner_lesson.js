import React, { useState } from 'react';

export default function BeginnerLesson() {
  const [testPassed, setTestPassed] = useState(false);

  return (
    <div style={styles.container}>
      <h1>Understanding the Intricacies of the Brain and Subconscious Mind</h1>
      <div style={styles.scrollable}>
        <p>
          The human brain, an astonishingly complex organ, serves as the
          epicenter of our existence, orchestrating an intricate symphony of
          thoughts, emotions, and actions. Comprising billions of neurons, each
          intricately connected, the brain operates as a sophisticated network,
          seamlessly processing information, regulating bodily functions, and
          shaping our perceptions of the world. At its core, the brain functions
          as the body's control center, overseeing essential physiological
          processes such as breathing, heartbeat, and digestion. But its
          capabilities extend far beyond mere biological functions; the brain is
          the seat of consciousness, the source of our thoughts, memories, and
          identities. Within the labyrinthine corridors of the brain lies a
          realm shrouded in mystery: the subconscious mind. Operating beneath
          the surface of conscious awareness, the subconscious exerts a profound
          influence on our thoughts, emotions, and behaviors. It serves as the
          repository of our deepest desires, fears, and beliefs, shaping our
          perceptions and guiding our actions in ways we may not fully
          comprehend. While our conscious minds are acutely aware of our
          thoughts and actions, much of what transpires within our minds occurs
          at a subconscious level. The subconscious mind operates silently,
          influencing our decisions, preferences, and behaviors without our
          conscious consent. It's the silent conductor orchestrating the
          symphony of our lives, shaping our reality in ways both subtle and
          profound. Understanding the power of the subconscious mind is
          essential to unlocking our full potential. By delving into the depths
          of our subconscious beliefs and patterns, we can unearth hidden
          obstacles and pave the way for personal growth and transformation.
          Techniques such as mindfulness, meditation, and hypnosis can help us
          access the subconscious realm and reprogram our minds for success. The
          subconscious mind is a powerhouse of creativity and intuition, capable
          of processing vast amounts of information and generating novel
          insights and solutions. It's the source of our gut instincts and
          hunches, guiding us toward the path of least resistance and optimal
          outcomes. Yet, its powers can also be a double-edged sword, as it can
          be influenced by negative beliefs, traumas, and conditioning that
          hinder our progress and limit our potential. To harness the power of
          the subconscious mind, we must first cultivate awareness of its
          workings and recognize the role it plays in shaping our lives. By
          cultivating mindfulness and self-reflection, we can begin to unravel
          the tangled web of subconscious beliefs and behaviors that hold us
          back from reaching our full potential. Mental fitness, much like
          physical fitness, requires regular exercise and training to maintain
          peak performance. Challenging ourselves with new experiences, learning
          new skills, and exposing ourselves to different perspectives stimulate
          neural growth and promote cognitive flexibility. Embracing challenges
          and overcoming obstacles not only strengthens our mental resilience
          but also expands our capacity for growth and self-improvement. Success
          in any endeavor demands effort and persistence. It's not enough to
          simply wish for success; we must be willing to put in the hard work
          and dedication required to achieve our goals. By cultivating a growth
          mindset, embracing challenges, and persisting in the face of
          adversity, we can overcome any obstacle and realize our dreams. In
          conclusion, the brain and the subconscious mind are powerful tools
          that shape our perceptions, behaviors, and ultimately, our destinies.
          By understanding the intricacies of these remarkable organs, we can
          unlock our full potential and create a life filled with purpose,
          passion, and fulfillment. Learning the harder things may be
          challenging, but it is through overcoming challenges that we truly
          grow and evolve as individuals. So let us embark on this journey of
          self-discovery and personal growth with open minds and courageous
          hearts, knowing that the greatest rewards lie on the other side of our
          fears and limitations.
        </p>
        <button>Take Quiz</button>
      </div>
      <button onClick={() => alert('you must pass the quiz first')}>
        Take Test
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1000px',
    margin: 'auto',
    padding: '20px',
  },
  scrollable: {
    maxHeight: '550px',
    overflowY: 'auto',
  },
};
