import { useEffect, useState } from "react";

export interface Mission {
  id: number;
  title: string;
  completed: boolean;
  points: number;
}

const initialMissions: Mission[] = [
  { id: 1, title: "Tomar foto", completed: false, points: 50 },
  { id: 2, title: "Moverse 50 metros", completed: false, points: 100 },
  { id: 3, title: "Quedarse quieto 10s", completed: false, points: 150 }
];

const useMissions = () => {

  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("missions");
    if (saved) {
      setMissions(JSON.parse(saved));
    } else {
      setMissions(initialMissions);
    }
  }, []);

  const save = (data: Mission[]) => {
    setMissions(data);
    localStorage.setItem("missions", JSON.stringify(data));
  };

  const completeMission = (id: number) => {
    const updated = missions.map(m =>
      m.id === id ? { ...m, completed: true } : m
    );
    save(updated);
  };

  const points = missions
    .filter(m => m.completed)
    .reduce((acc, m) => acc + m.points, 0);

  const progress = missions.filter(m => m.completed).length / missions.length;

  return {
    missions,
    completeMission,
    points,
    progress
  };
};

export default useMissions;