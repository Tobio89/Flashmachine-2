function FirebaseProvider(Child: any) {
  const doProof = () => {
    console.log("It worked");
  };

  return function Produce() {
    return <Child doProof={doProof} />;
  };
}

export default FirebaseProvider;
